Do create an NgModule for all distinct features in an application; for example, a Heroes feature. All feature areas are in their own folder, with their own NgModule.

Do place the feature module in the same named folder as the feature area; for example, in app/heroes.

Do name the feature module file reflecting the name of the feature area and folder; for example, app/heroes/heroes.module.ts.

Do name the feature module symbol reflecting the name of the feature area, folder, and file; for example, app/heroes/heroes.module.ts defines HeroesModule.

The initial Angular application does only have one single module, which works great for small applications. But as the application grows, you’ll need to consider subdividing it into multiple feature modules, some which can be lazy loaded. These modules should only depend on the SharedModule, and their functionality should be scoped to the module.

Feature modules deliver user experience dedicated to a particular application feature like the user- or the administration-part of the app. We’re grouping the components, services, models and other functionality that belongs together. They typically have a top component that acts as the feature root and private, supporting sub-components descend from it. They might be imported by the root AppModule of a small application that lacks routing or need to show some initial content, but can also be lazy loaded with references in the app routing file.

Domain feature modules rarely have providers, but when they do, the lifetime of the provided services should be the same as the lifetime of the module. Beginning with Angular 6.0, the preferred way pf creating a singleton is to set providedIn to root on the service’ @Injectable decorator. This tells Angular to provide the service in the application root. But we can also use this

to create a singleton service is to set providedIn to root on the service's @Injectable() decorator. This tells Angular to provide the service in the application root. We can use this in the context of a feature by using the providedIn property on the module instead, resulting in an error when using it elsewhere.

When you need the service in other modules as well, it probably belongs in the CoreModule’ service’s declaration instead.
