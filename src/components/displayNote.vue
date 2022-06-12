<template>
    <div class="container">
        <div class="note">
            <div class="note__container" v-for="result in reverseItems" :key="result.id" @click="showModal(result.id)" :style="{backgroundColor: result.bgcolor}" :class="{whiteColor: result.bgcolor == ''}">
                <h1 class="note__title">{{result.title}}</h1>
                <p class="note__content">{{result.content}}</p>
                <p class="note__date">{{new Date(result.updatedAt).toLocaleString()}}</p>
                <svg class="note__edit" @click="showModal(result.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.856 3L15.2096 2.64648L14.8559 2.29276L14.5023 2.64655L14.856 3ZM8.006 9.854L8.35949 10.2076L8.35966 10.2075L8.006 9.854ZM2 15.858L1.64651 15.5044L1.5 15.6508V15.858H2ZM2 20.999H1.5V21.499H2V20.999ZM7.142 20.999V21.499H7.34903L7.49547 21.3526L7.142 20.999ZM13.149 14.995L13.5025 15.3486L13.5025 15.3486L13.149 14.995ZM20 8.145L20.3535 8.49858L20.7071 8.14506L20.3536 7.79148L20 8.145ZM14.5023 2.64655L7.65234 9.50055L8.35966 10.2075L15.2097 3.35345L14.5023 2.64655ZM7.65251 9.50039L1.64651 15.5044L2.35349 16.2116L8.35949 10.2076L7.65251 9.50039ZM1.5 15.858V20.999H2.5V15.858H1.5ZM2 21.499H7.142V20.499H2V21.499ZM7.49547 21.3526L13.5025 15.3486L12.7955 14.6414L6.78854 20.6454L7.49547 21.3526ZM13.5025 15.3486L20.3535 8.49858L19.6465 7.79142L12.7955 14.6414L13.5025 15.3486ZM20.3536 7.79148L15.2096 2.64648L14.5024 3.35352L19.6464 8.49852L20.3536 7.79148ZM12 21.5H22V20.5H12V21.5ZM22 20.5H12V21.5H22V20.5Z" fill="black"/>
                </svg>
            </div>
            
        </div>
        <div class="overlay" v-show="this.show" @click="hideModal"></div>
        <div class="modal" v-show="this.show">
            <form>
                <input type="text" placeholder="Title" v-model="notes.title">
                <textarea name="" id="" cols="30" rows="10" v-model="notes.content"></textarea>
            </form>
            <div class="modal__footer">
                <button class="modal__btn modal__btn--danger" @click="deleteNote(notes.id)">Delete</button>
                <button class="modal__btn modal__btn--save" @click.prevent="updateNote(notes.id)">Done</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
const api = process.env.VUE_APP_URL;
export default {
    data() {
        return {
            results: [],
            notes: {},
            show: false
        }
    },
    computed: {
        ...mapGetters(["getAllNotes"]),
        reverseItems() {
            return this.getAllNotes.slice().reverse();
        }     
    },
    methods: {
        // get data from api
        ...mapActions(["fetchNotes", "addNotes"]),

        // hide modal
        hideModal() {
            this.show = false
        },

        // show modal
        showModal(id) {
            this.show = true;
             axios.get(api + id).then(() => {
                this.fetchNotes();
            })
        },

        // update notes
        updateNote(id) {
            this.show = false
            axios.put(api + id, this.notes).then(() => {
                this.fetchNotes();
            })
        },

        // delete notes
        deleteNote(id) {
            axios.delete(api + id).then(() => {
                this.show = false
                this.fetchNotes();
            })
        }
    },
    created() {
        this.fetchNotes();
    },
}
</script>

<style lang="scss" scoped>
    .note {
        width: 90%;
        margin: 50px auto 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        @media screen and (min-width: 1441px) {
            grid-template-columns: repeat(5, 1fr);
        }

        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            width: 100%;
        }

        &__container {
            background: var(--white);
            padding: 20px;
            border-radius: 5px;
            max-height: 100%;
            cursor: pointer;
            color: #fff;
            border: 1px solid #dadce0;
            position: relative;
        }

        &__title {
            font-size: 16px;
            margin-bottom: 10px;
        }

        &__content {
            line-height: 1.4;
            font-size: 14px;
            margin-bottom: 40px;
        }

        &__date {
            font-size: 10px;
            position: absolute;
            bottom: 20px;
        }

        &__edit {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 16px;
            height: 16px;
        }
    }

    .overlay {
        width: 100vw;
        height: 100vh;
        background: rgb(255, 255, 255, .2);
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }

    .modal {
        width: 600px;
        max-width: 600px;
        background: var(--white);
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
        border-radius: 5px;
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;
        flex-direction: column;

        @media (max-width: 600px) {
            width: calc(100% - 40px);
            margin: 0 auto;
        }

        form {
            input {
                width: 100%;
                font-size: 16px;
                border: none;
                font-family: Inter;
                margin-bottom: 10px;
                &:focus {
                    outline: none;
                }
            }
            textarea {
                width: 100%;
                height: 200px;
                border: none;
                resize: none;
                font-size: 16px;
                font-family: Inter;
                &:focus {
                    outline: none;
                }
            }
        }

        &__footer {
            display: flex;
            justify-content: space-between;

            button {
                padding: 10px;
                background: #e7e7e7;
                border: none;
                cursor: pointer;
                font-weight: bold;

                &.modal__btn--danger {
                    background: #f20;
                    color: #fff;
                }
            }
        }
    }

    .whiteColor {
        color: #000;
    }
</style>