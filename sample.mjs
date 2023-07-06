#!/usr/bin/env zx

await spinner('working...', () => $`sleep 2`)
let bear = "kuma"
// bear = await question('What kind of bear is best? ')

await $`ls`
await $`pwd`

const flags = [ '--show-current' ]
const branch = await $`git branch ${flags}`
console.log(chalk.green(`current branch is ${branch}`))

try {
  await $`exit 1`
} catch(p) {
  console.log(`Exit code: ${p.exitCode}`)
  console.log(`Error: ${p.stderr}`)
}

// Creates a new async context.
within(async () => {
  cd('/tmp')

  setTimeout(async () => {
    await $`pwd` // => /tmp
  }, 1000)
})


await Promise.all([
  $`sleep 1; echo 1`,
  $`sleep 2; echo 2`,
  $`sleep 3; echo 3`,
])
console.log(`done ${bear}`)

