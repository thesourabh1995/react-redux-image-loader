const image = "https://purr.objects-us-east-1.dream.io/i/WgqwC.jpg";

export default function (state = null, action) {
    switch (action.type) {
        case 'LOAD_IMAGE':
            console.log(action);
            return {file: action.payload.file};
            break;
        default:
            return {file: image};
            break;
    }
    return state;
}