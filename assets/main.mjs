const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCTdxW3Si8aduSuZbzyR2jlw&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '249146cbd5msh7f3ca0a9a3a20cdp1f9130jsne0ea75871ee1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPi){
    const response = await fetch(urlAPi, options);
    const data = await response.json();
    return data;
}
{}
//funcion que se auto-llama
(async ()=>{
    try{
        const videos = await fetchData(API);
        let view = `
    ${videos.items.map(video =>`
    <a href="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
    <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}"alt="${video.snippet.description}"class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <spanaria-hidden="true"class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
          </div>
        </div>
        `)}
        `;
        content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();