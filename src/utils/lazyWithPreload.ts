// utils/lazyWithPreload.ts
import React from "react";

// This function wraps React.lazy() and adds a `.preload()` method for manual preloading
export function lazyWithPreload(
    factory: () => Promise<{ default: React.ComponentType<any> }>
) {
    const Component = React.lazy(factory); // lazy-load component as usual

    // Attach a custom .preload method to start loading early (manually)
    (Component as any).preload = factory;

    // Return the enhanced component type
    return Component as React.LazyExoticComponent<any> & { preload: () => void };
}