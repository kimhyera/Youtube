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

    async chennals(name) {
        const reponse = await this.youtube.get('channels', {
            params: {
                part: 'snippet',
                chart: 'chennals',
                maxResults: 25,
                forUsername: name

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