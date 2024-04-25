/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [
      {
        path: '/user',
        method: 'get',
        routes: [
          {
            entities: {
              headers: { 'name-header': 'Nursultan' }
            },
            data: { emoji: '🦁', name: 'Nursultan' }
          },
          {
            entities: {
              headers: { 'name-header': 'Dmitriy' }
            },
            data: { emoji: '☄', name: 'Dmitriy' }
          }
        ]
      }
    ]
  }
};
  
  export default mockServerConfig;