import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    layout("./routes/lead-form/_layout.tsx", [
        route("formulario-artes-manuais", "./routes/lead-form/index.tsx"),
    ]),

    layout("./routes/sign-in/_layout.tsx", [
        route("sign-in", "./routes/sign-in/index.tsx"),
    ]),

    layout("./routes/admin/_layout.tsx", [
        route("admin", "./routes/admin/index.tsx"),
        route("admin/leads", "./routes/admin/leads.tsx"),
    ]),

    route(
        "api/lead-form/create-lead-form",
        "./routes/api/lead-form/create-lead-form.ts",
    ),
    route("api/admin/sign-in", "./routes/api/admin/sign-in.ts"),
] satisfies RouteConfig;
