// import type { Config } from 'jest'

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'node'
//   // setupFilesAfterEnv: ['./jest.setup.js']
// }

// export default config

import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

// Configuração personalizada do Jest
const customJestConfig = {
  preset: 'ts-jest', // Preset para TypeScript
  testEnvironment: 'jest-environment-jsdom', // Ambiente de testes para o DOM
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Arquivo de setup
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest' // Transforma arquivos TypeScript
  },
  moduleNameMapper: {
    // Mapeie módulos se necessário, por exemplo, estilos CSS
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}

module.exports = createJestConfig(customJestConfig)
