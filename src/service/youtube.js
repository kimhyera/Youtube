import axios from 'axios';

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: key },

        })


    }
    async mostPopular() {
        const reponse = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25

            }
        });

        return reponse.data.items;


    }

    async search(query) {
        const reponse = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,

            }
        });

        return reponse.data.items.map(item => ({ ...item, id: item.id.videoId }))



    }
}

export default Youtube;