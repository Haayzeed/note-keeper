<template>
    <div>
        <div class="note__form">
            <form action="">
                <input type="text" placeholder="Title" v-model="title">
                <textarea name="" id="" cols="30" rows="10" v-model="content" placeholder="Your note here..."></textarea>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    }
}
</script>

<style scoped lang="scss">
    .note__form {
        width: 600px;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        margin: 50px auto 30px auto;
        form {
            width: 100%;
            background: var(--white);
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
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
                height: 100px;
                border: none;
                resize: none;
                font-size: 16px;
                font-family: Inter;
                &:focus {
                    outline: none;
                }
            }
        }
    }
</style>