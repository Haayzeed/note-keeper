<template>
    <div>
        <div class="note">
            <div class="note__content">
                <h1>yes this me me</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="note__content">
                <h1>yes this me me</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div class="note__content">
                <h1>yes this me me</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quia explicabo voluptate reiciendis.</p>
            </div>
            <div class="note__content">
                <h1>yes this me me</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi.</p>
            </div>
            <div class="note__content">
                <h1>yes this me me</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="note__content">
                <h1>yes this me me</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .note {
        width: 90%;
        margin: 50px auto 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        &__content {
            background: var(--white);
            padding: 20px;
            border-radius: 5px;
            max-height: 100%;
            h1 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            p {
                line-height: 1.4;
                font-size: 14px;
            }
        }
    }
</style>