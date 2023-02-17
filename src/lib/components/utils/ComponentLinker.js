/**
 * init extracts #konva_unit logic wrapped in Svelte as #konva_component
 * @param {any} _this 
 * @param {any} konva_unit_props 
 * @param {any} container 
 * @returns Konva component base
 */
export function init(_this, konva_unit_props, container) {
    let konva_component = new _this({target: container}).$$.ctx[0];     
    return (
        new konva_component({
            container,
            ...konva_unit_props
        })
    );
}

/**
 * registers Konva component
 * @param {function} kBase@REQUIRED
 * @param {object} konva_unit_props 
 * @returns registered Konva component
 */
export function ComponentLinker(kBase, konva_unit_props = {}, container = document.body){
    if ( (kBase) !== null || undefined ) {
        return init(kBase, konva_unit_props, container);
    }
    else {
        throw new Error("SVELTE-KONVA__ERROR: kComponent was not specified")
    }
}