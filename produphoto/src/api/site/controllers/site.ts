/**
 * Site controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::site.site', ({ strapi }) => ({
  /**
   * Create a site with the current user as owner
   */
  async create(ctx) {
    // Get the current user
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be logged in to create a site');
    }

    // Add the current user to the request body
    ctx.request.body.data = {
      ...ctx.request.body.data,
      user: user.id,
    };

    // Create the site
    const response = await super.create(ctx);
    return response;
  },

  /**
   * Find sites owned by the current user
   */
  async findMySites(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be logged in to view your sites');
    }

    // Find sites where the user is the owner
    const sites = await strapi.entityService.findMany('api::site.site', {
      filters: { user: user.id },
      populate: ['collections', 'mediaItems'],
    });

    return { data: sites };
  },

  /**
   * Find a site by slug (public access)
   */
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const site = await strapi.entityService.findMany('api::site.site', {
      filters: { slug, isPublished: true },
      populate: ['collections', 'user'],
    });

    if (!site || site.length === 0) {
      return ctx.notFound('Site not found');
    }

    return { data: site[0] };
  },

  /**
   * Update a site if the current user is the owner
   */
  async update(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be logged in to update a site');
    }

    // Find the site
    const site = await strapi.entityService.findOne('api::site.site', id, {
      populate: ['user'],
    });

    // Check if the site exists and the current user is the owner
    if (!site) {
      return ctx.notFound('Site not found');
    }

    if (!site.user || site.user.id !== user.id) {
      return ctx.forbidden('You are not authorized to update this site');
    }

    // Update the site
    const response = await super.update(ctx);
    return response;
  },

  /**
   * Delete a site if the current user is the owner
   */
  async delete(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be logged in to delete a site');
    }

    // Find the site
    const site = await strapi.entityService.findOne('api::site.site', id, {
      populate: ['user'],
    });

    // Check if the site exists and the current user is the owner
    if (!site) {
      return ctx.notFound('Site not found');
    }

    if (!site.user || site.user.id !== user.id) {
      return ctx.forbidden('You are not authorized to delete this site');
    }

    // Delete the site
    const response = await super.delete(ctx);
    return response;
  },
})); 