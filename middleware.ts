import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRouted = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "recordings",
  "/personal-room",
  "/meeting(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRouted(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
