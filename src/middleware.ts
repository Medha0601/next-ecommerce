import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:["/api/checkdb"]
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};