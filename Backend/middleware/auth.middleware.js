import jwt from 'jsonwebtoken';

const authenticate = async(ctx, next) =>{
    const authentication = ctx.request.header && ctx.request.header.authentication || null;
    if (!authentication) return ctx.response.status = 401;
    jwt.verify(authentication, process.env.AUTH_SECRET, (error) =>{
        if(error)
            return ctx.response.status = 401;
    })
    await next();
}

export {authenticate}