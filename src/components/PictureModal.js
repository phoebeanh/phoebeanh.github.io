export default {
    name: 'PictureModal', // necessary for self-reference
    props: {
        src:'',
        caption:''    
    },
    template: `
        <div class="modal-overlay">
            <div class="modal">
                <img id="modal-picture" :src="src">
                <p id="caption">{{caption}}</p>
                <button class="close" @click="$emit('close')">Close</button>
            </div>
        </div>`
        
}