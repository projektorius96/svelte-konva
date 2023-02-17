<script>
    import { Layer } from 'konva/lib/Layer';
    export function kLayer(options){
        
        /**
            * [Layer]{@link https://konvajs.org/api/Konva.Layer.html}
        */
        return (
            new /* Konva. */Layer({
                ...options
            })
        )

    }
</script>