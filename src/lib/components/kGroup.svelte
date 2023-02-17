<script>
    import { Group } from 'konva/lib/Group';
    export function kGroup(options){

        /**
            * [Group]{@link https://konvajs.org/api/Konva.Group.html}
        */
        return (
            new /* Konva. */Group({
                ...options
            })
        )

    }
</script>