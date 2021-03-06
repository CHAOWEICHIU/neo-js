#!/usr/bin/env node

/**
 * Get Block Count Example
 *
 * As per example on README.md
 */

// -- Bootstrap

const Neo = require('../../dist/neo')

// -- Chain of command

async function main () {
  console.log('== Get Block Count Example ==')

  const testnetNeo = new Neo({ network: 'testnet' })
  const mainnetNeo = new Neo({ network: 'mainnet' })

  setTimeout(() => {
    testnetNeo.mesh.rpc('getBlock', 1000)
      .then((res) => console.log('Testnet getBlock(1000).hash:', res.hash))
    mainnetNeo.mesh.rpc('getBlock', 1000)
      .then((res) => console.log('Mainnet getBlock(1000).hash:', res.hash))
  }, 5000)
}

// -- Execute

process.on('unhandledRejection', (reason, p) => {
  console.warn('Unhandled Rejection at: Promise', p, 'reason:', reason)
})

main()
