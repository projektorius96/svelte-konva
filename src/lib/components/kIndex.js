/** @module SvelteKonva/Essentials */
import kStage from './kStage.svelte';
import kLayer from './kLayer.svelte';
import kGroup from './kGroup.svelte';

/** @module SvelteKonva/Primitives */
import kText from './kText.svelte';

/** @module SvelteKonva */
export default (function SvelteKonva(){

    return {
        /** {@NOTATION '〵' unicode U+3035 is symbol known as 'kana' } */
        namespace_sep: RegExp('\u{3035}').source,
        
        SvelteKonva〵Essentials : {
            kStage,
            kLayer,
            kGroup,
        },
        SvelteKonva〵Primitives: {
            kText
        },
    }

}).call()