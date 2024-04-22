import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:["/api/checkdb", "/api/webhooks/clerk"]
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};