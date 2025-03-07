/**
 * Site router
 */

export default {
  routes: [
    // Default routes
    {
      method: 'GET',
      path: '/sites',
      handler: 'site.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/sites/:id',
      handler: 'site.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/sites',
      handler: 'site.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/sites/:id',
      handler: 'site.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/sites/:id',
      handler: 'site.delete',
      config: {
        policies: [],
      },
    },

    // Custom routes
    {
      method: 'GET',
      path: '/my-sites',
      handler: 'site.findMySites',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/sites/slug/:slug',
      handler: 'site.findBySlug',
      config: {
        policies: [],
      },
    },
  ],
}; 