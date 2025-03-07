/**
 * Site service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::site.site', ({ strapi }) => ({
  /**
   * Create a site with the current user as owner
   */
  async createWithOwner(data, user) {
    // Add the user to the data
    const siteData = {
      ...data,
      user: user.id,
    };

    // Create the site
    const site = await strapi.entityService.create('api::site.site', {
      data: siteData,
      populate: ['user', 'collections', 'mediaItems'],
    });

    return site;
  },

  /**
   * Find sites owned by a user
   */
  async findByUser(userId) {
    const sites = await strapi.entityService.findMany('api::site.site', {
      filters: { user: userId },
      populate: ['collections', 'mediaItems'],
    });

    return sites;
  },

  /**
   * Find a site by slug
   */
  async findBySlug(slug, isPublished = true) {
    // Use type assertion for filters
    const filters: any = { slug };

    if (isPublished) {
      filters.isPublished = true;
    }

    const sites = await strapi.entityService.findMany('api::site.site', {
      filters,
      populate: ['collections', 'user', 'mediaItems'],
    });

    return sites.length > 0 ? sites[0] : null;
  },

  /**
   * Check if a user is the owner of a site
   */
  async isOwner(siteId, userId) {
    const site = await strapi.entityService.findOne('api::site.site', siteId, {
      populate: ['user'],
    });

    // Use optional chaining and type assertion
    const siteUser = (site as any)?.user;
    return siteUser && siteUser.id === userId;
  },
})); 