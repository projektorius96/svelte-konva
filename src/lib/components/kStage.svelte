<script>
    import { Stage } from 'konva/lib/Stage';
    export function kStage(options){

        /**
            * [Stage]{@link https://konvajs.org/api/Konva.Stage.html}
        */
        return (
            new /* Konva. */Stage({
                ...options
            })
        )

    }
</script>