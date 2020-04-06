import PostsService from './postsService';

const services = {
    posts: PostsService
};

export const ServiceFactory = {
    get: name => services[name]
};