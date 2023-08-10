export default MockResponse = (endpoint) => {
    let url=''
    if(process.env.isProduction){
       url = `https://jsearch.p.rapidapi.com/${endpoint}`
    }else{
        switch(endpoint){
            case 'search':
                url = '../../MockResponse/search.json'
                break
            case 'job-details':
                url = '../../MockResponse/jobDetails.json'
                break
        }
    }
    return url
}