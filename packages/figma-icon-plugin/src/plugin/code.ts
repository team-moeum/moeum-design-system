figma.showUI(__html__, { themeColors: true, height: 550 });

/**
 * Extract Icon
 * https://github.com/channel-io/bezier-react/blob/main/packages/bezier-figma-plugin/src/plugin/index.ts
 */
export const isComponentNode = (node: SceneNode): node is ComponentNode =>
  node.type === 'COMPONENT'

export const findAllComponentNode = (rootNode: SceneNode) => {
  const result: ComponentNode[] = []
  function findComponentNode(node: SceneNode) {
    if (isComponentNode(node)) {
      result.push(node)
      return
    }
    if ('children' in node) {
      node.children.forEach(findComponentNode)
    }
  }
  findComponentNode(rootNode)
  return result
}

function convertSvgFileName(input) {
  const match = input.match(/name=(.+)/);
  
  if (match && match[1]) {
    const cleanedName = match[1].replace(/[-\s]/g, '');
    const capitalizedName = cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
    return capitalizedName + 'Icon';
  }
  
  return '';
}

async function extractIcon() {
  const componentNodes = figma.currentPage.selection
    .map(findAllComponentNode)
    .flatMap((v) => v)

  const svgs = await Promise.all(
    componentNodes.map(async (node) => {
      try {
        const svg = await node.exportAsync({ format: 'SVG_STRING' })
        const id = node.name
        return {
          svg,
          id,
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.log(e)
        console.log(node)
        /* eslint-enable no-console */
        return undefined
      }
    })
  )

  const svgByName = svgs.reduce((acc, cur) => {
    if (!cur?.id) {
      return acc
    }

    const name = convertSvgFileName(cur?.id);

    if (!name) {
      return acc
    }

    acc[name] = cur
    return acc
  }, {})

  const pluginMessage = {
    type: 'extractIcon',
    payload: {
      svgByName,
    },
  }

  figma.ui.postMessage(pluginMessage)
}

function getLocalData (key) {
  return figma.clientStorage.getAsync(key)
}

function setLocalData (key, data) {
  figma.clientStorage.setAsync(key, data)
}

function init () {
  getLocalData('githubData')
    .then(githubData => {
      figma.ui.postMessage({ type: 'githubData', payload: githubData })
    })
}

figma.ui.onmessage = msg => {
  switch (msg.type) {
    case 'extract': 
      extractIcon()
      break
    case 'setGithubData':
      setLocalData('githubData', msg.payload)
      break
  }
}

init()