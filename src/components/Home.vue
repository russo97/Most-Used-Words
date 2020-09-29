<template>
    <v-container fluid>
        <v-form>
            <v-file-input
                chips
                multiple
                v-model="files"
                append-outer-icon="mdi-send"
                label="Selecione as legendas"
                prepend-icon="mdi-message-text"
                @click:append-outer="processSubtitles" />
        </v-form>
        <div class="pills">
            <Pill
                :key="word.name"
                :name="word.name"
                :amount="word.amount"
                v-for="word in groupedWords" />
        </div>
    </v-container>
</template>

<script>
import Pill from './Pill';

export default {
    data () {
        return {
            files: [],
            groupedWords: [
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 }
            ]
        }
    },

    methods: {
        processSubtitles () {
            console.log(this.files);
        }
    },

    components: {
        Pill
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;     
    }
</style>