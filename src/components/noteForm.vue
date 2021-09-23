<template>
    <div>
        <div class="note" :style="{backgroundColor: this.note.bgcolor}" :class="{noBackground: this.note.bgcolor}">
            <form action="">
                <input type="text" placeholder="Title" v-model="note.title">
                <textarea name="" id="" cols="30" rows="10" v-model="note.content" placeholder="Your note here..."></textarea>
                <div class="note__footer">
                    <div class="note__tools">
                        <svg class="MuiSvgIcon-root-2134 MuiSvgIcon-fontSizeSmall-2141" focusable="false" viewBox="0 0 24 24" color="#888A8B" aria-hidden="true">
                            <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" fill="#000"></path>
                            <circle cx="6.5" cy="11.5" r="1.5"></circle>
                            <circle cx="9.5" cy="7.5" r="1.5"></circle>
                            <circle cx="14.5" cy="7.5" r="1.5"></circle>
                            <circle cx="17.5" cy="11.5" r="1.5"></circle>
                        </svg>
                        <div class="note__color">
                            <button class="btn__color" content="" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#345920" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#42275e" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#5c2b29" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#16504b" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#5b2245" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#614a19" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#2d555e" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#442f19" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#635d19" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#1e3a5f" @click.prevent="getColor"></button>
                            <button class="btn__color" content="#3c3f43" @click.prevent="getColor"></button>
                        </div>
                    </div>
                    <button @click="addData">Add Note</button>
                    
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            note: {
                title: '',
                content: '',
                bgcolor: null
            },
            result: {}
        }
    },
    methods: {
        getColor(event){
            this.note.bgcolor = event.target.getAttribute('content');
            event.target.value = 1
        },

        addData(e) {
            e.preventDefault();
            console.log(this.note);
            axios.post('https://strapi-note.herokuapp.com/notes', this.note).then((response) => {
                console.log(response)
            })
        }
    }
}
</script>

<style scoped lang="scss">

    .note {
        width: 600px;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        margin: 50px auto 30px auto;
        border-radius: 5px;
        &.noBackground {
            form {
                input, textarea {
                    color: #fff;
                }
            }
        }
        @media (max-width: 600px) {
            width: 100%;
        }

        form {
            width: 100%;
            padding: 20px;
            box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
            input {
                width: 100%;
                font-size: 16px;
                border: none;
                font-family: Inter;
                margin-bottom: 10px;
                background: unset;
                &:focus {
                    outline: none;
                }
            }
            textarea {
                width: 100%;
                height: 100px;
                border: none;
                resize: none;
                font-size: 16px;
                font-family: Inter;
                background: unset;
                &:focus {
                    outline: none;
                }
            }
        }
        &__footer {
            display: flex;
            justify-content: flex-end;
            position: relative;
        }

        &__tools {
            display: flex;
            align-items: center;
            margin-right: 10px;
            svg {
                width: 24px;
                height: 24px;
                stroke-width: .5;
                cursor: pointer;
            }
            &:hover {
                .note__color {
                    display: flex;
                }
            }
        }

        button {
            padding: 10px;
            background: #e7e7e7;
            border: none;
            cursor:pointer;
            font-weight: bold;
        }

        &__color {
            transition: 300ms;
            position: absolute;
            top: -110px;
            right: 30px;
            display: none;
            width: 150px;
            flex-wrap: wrap;
            background: var(--white);
            padding: 2px 3px;
            border-radius: 5px;
            box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);

            button {
                width: 32px;
                height: 32px;
                border: none;
                border-radius: 50%;
                border: 1px solid #999;
                margin: 2px;
                &:nth-child(1) {
                    background: unset;
                }
                &:nth-child(2) {
                    background: #345920;
                }
                &:nth-child(3) {
                    background: #42275e;
                }
                &:nth-child(4) {
                    background: #5c2b29;
                }
                &:nth-child(5) {
                    background: #16504b;
                }
                &:nth-child(6) {
                    background: #5b2245;
                }
                &:nth-child(7) {
                    background: #614a19;
                }
                &:nth-child(8) {
                    background: #2d555e;
                }
                &:nth-child(9) {
                    background: #442f19;
                }
                &:nth-child(10) {
                    background: #635d19;
                }
                &:nth-child(11) {
                    background: #1e3a5f;
                }
                &:nth-child(12) {
                    background: #3c3f43;
                }
            }
        }
    }
</style>