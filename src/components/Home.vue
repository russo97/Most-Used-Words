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
const { ipcRenderer } = window.require('electron');

export default {
    data () {
        return {
            files: [],
            groupedWords: []
        }
    },

    methods: {
        processSubtitles () {
            const paths = this.files.map(f => f.path);

            ipcRenderer.send('process-subtitles', paths);
            ipcRenderer.on('process-subtitles', (event, resp) => {
                console.log(resp);
                this.groupedWords = resp;
            });
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