<script>

    import { onMount } from 'svelte';
    import SvelteKonva from './components/kIndex.js';
    import { ComponentLinker as Paint } from './components/utils/ComponentLinker';
    import { fullViewportWidth, fullViewportHeight } from './components/utils/viewport';

    const {
    
        SvelteKonva〵Essentials: { kStage, kLayer, kGroup, }, 
        SvelteKonva〵Primitives: { kText } 
    
    } = SvelteKonva;

    let isMounted = false;
    let [stage, layer, group] = [null, null, null];
    let text = "";

    onMount(()=>{
        isMounted = true;
        console.log("kText=?", kText);
    })

    $: if(isMounted){
        // DEV_NOTE: Register stage, layer, etc. inside onMount or later (e.g. isMounted) to bypass error [see – cont'd]
        // [cont'd] - "ReferenceError: document is not defined"
        stage = Paint(kStage, {
            /* container: document.getElementById("root"), */// [PASSED]
            width: 960,
            height: 640,
        });
        stage.setAttr('width', fullViewportWidth); // # FIXES WIDTH SCALING ISSUE
        stage.setAttr('height', fullViewportHeight); // # FIXES HEIGHT SCALING ISSUE
        /* console.log(`--after w:${stage.getAttr('width')} : --after h: ${stage.getAttr('height')}`); */// [PASSED]

        layer = Paint(kLayer);
        group = Paint(kGroup, {
            draggable: true,
        });
        
        // FOR DEBUGGING ONLY
        globalThis.KONVEKT_STAGE =  stage; /** @PASSED */
        globalThis.KONVEKT_LAYERS = stage.getChildren(); /** @PASSED */
    }

    $: if (stage && layer) {

        stage.add(
            layer.add(
                group.add(
                    text = Paint(kText, {
                    x: fullViewportWidth / 3, /* <=: DEV_NOTE # centering could be improved in the future ; */
                    y: fullViewportHeight / 3, /* <=: DEV_NOTE # centering could be improved in the future ; */
                    text: "BUILT WITH SVELTE-KONVA 💘",
                    fontSize: 64,
                    fontFamily: 'Calibri',
                    fill: 'red',
                    width: 400,
                    padding: 0,
                    align: 'center',
                })
                )
            )
        )

    }

    $: if (text) {
        text.on('click', (e)=>{
            /* console.log(e); */// [PASSED]
        })
    }
    
</script>