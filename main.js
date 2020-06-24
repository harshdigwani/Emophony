let songs = {
    "sad": [
        ["channa mereya", "https://gaana.com/song/channa-mereya"],
        ["bhula dena", "https://gaana.com/search/Bhula%20Dena"],
        ["dard dilo ke", "https://gaana.com/song/dard-dilo-ke"],
        ["main dhoondne ko", "https://gaana.com/song/main-dhoondne-ko-zamaane-mein"],
        ["humdard", "https://gaana.com/song/humdard"],
        ["lo maan liya", "https://gaana.com/song/lo-maan-liya"],
        ["judaai", "https://gaana.com/song/judaai-3"],
        ["rona sikhade ve", "https://gaana.com/song/rona-sikhade-ve"],
        ["narazgi", "https://gaana.com/song/narazgi-4"],
        ["tera chehra", "https://gaana.com/song/tera-chehra-9"]
    ],

    "happy": [
        ["senorita", "https://gaana.com/song/senorita-17"],
        ["kala chashma", "https://gaana.com/song/kala-chashma"],
        ["char shanivaar", "https://gaana.com/song/chaar-shanivaar"],
        ["dil dhadakne do", "https://gaana.com/artist/priyanka-chopra"],
        ["let's nacho", "https://gaana.com/song/lets-nacho"],
        ["swag se swagat", "https://gaana.com/song/swag-se-swagat"],
        ["aal-izz-well", "https://gaana.com/lyrics/aal-izz-well"],
        ["sunny sunny", "https://gaana.com/song/sunny-sunny-1"],
        ["tum hi bandhu", "https://gaana.com/song/tum-hi-ho-bandhu"],
        ["baby ko bass pasand hai", "https://gaana.com/song/baby-ko-bass-pasand-hai"]
    ],


    "fearful": [
        ["aaja gufaon mein aa", "https://gaana.com/song/aaja-gufaon-mein-aa"],
        ["lori of death", "https://gaana.com/song/lori-of-death"],
        ["saathi mere saathi", "https://gaana.com/song/sathi-mere-sathi"],
        ["bhoot hoon main", "https://gaana.com/song/bhoot-hoon-main"],
        ["lautungi main", "https://gaana.com/song/lautungi-main"],
        ["yeh sheher hai", "https://gaana.com/lyrics/yeh-sheher-hai"],
        ["aake darr", "https://gaana.com/song/aake-darr-1"],
        ["aayega aanewala", "https://gaana.com/song/aayega-aanewala-instrumental"],
        ["jaaniya", "https://gaana.com/song/jaaniya-1"],
        ["muskaanein jhooti hai", "https://gaana.com/song/muskaanein-jhooti-hai"]
    ],


    "neutral": [
        ["khaabon ke parinday", "https://gaana.com/song/khaabon-ke-parinday-1"],
        ["tum ho", "https://gaana.com/song/tum-ho"],
        ["dil kashi", "https://gaana.com/song/dil-kashi"],
        ["der lagi lekin", "https://gaana.com/song/der-lagi-lekin-1"],
        ["khayalon mein", "https://gaana.com/song/khayalon-mein"],
        ["tum saath ho", "https://gaana.com/song/agar-tum-saath-ho"],
        ["saathi rey", "https://gaana.com/song/saathi-rey"],
        ["shukr tera", "https://gaana.com/song/shukr-tera"],
        ["kaun tujhe", "https://gaana.com/song/kaun-tujhe-1"],
        ["pal", "https://gaana.com/song/pal-from-jalebi"]
    ],


    "angry": [
        ["jee karda", "https://gaana.com/song/jee-karda-6"],
        ["din pareshaan hai", "https://gaana.com/song/din-pareshan-hai-4"],
        ["chil gaye naina", "https://gaana.com/song/chhil-gaye-naina"],
        ["ae dil hai muskil", "https://gaana.com/song/ae-dil-hai-mushkil"],
        ["daayre", "https://gaana.com/song/daayere"],
        ["keh ke lunga", "https://gaana.com/song/keh-ke-lunga"],
        ["channa mereya", "https://gaana.com/song/agar-tum-saath-ho"],
        ["apna time aaega", "https://gaana.com/song/apna-time-aayega"],
        ["tujhse naraz nahin zindagi", "https://gaana.com/song/tujhse-naraz-nahin-zindagi"],
        ["ghamand kar", "https://gaana.com/song/ghamand-kar-from-tanhaji-the-unsung-warrior"]
    ],
	
	"disguested" : [
		["lo maan liya", "https://gaana.com/song/lo-maan-liya"],
        ["judaai", "https://gaana.com/song/judaai-3"],
        ["rona sikhade ve", "https://gaana.com/song/rona-sikhade-ve"],
		["keh ke lunga", "https://gaana.com/song/keh-ke-lunga"],			
        ["channa mereya", "https://gaana.com/song/agar-tum-saath-ho"],
        ["apna time aaega", "https://gaana.com/song/apna-time-aayega"],
        ["tujhse naraz nahin zindagi", "https://gaana.com/song/tujhse-naraz-nahin-zindagi"],	
	]

}
let emotionEmoji = {
    'happy': '&#128513',
    'sad': '&#128532',
    'fearful': '&#128552',
    'neutral': '&#128528',
    'angry': '&#128545',
    'surprise': '&#128562'
}

let emotion = ''
let constraintObj = {
    audio: false,
    video: {
        facingMode: "user",
        width: {
            min: 640,
            ideal: 1280,
            max: 1920
        },
        height: {
            min: 480,
            ideal: 720,
            max: 1080
        }
    }
};
// width: 1280, height: 720  -- preference only
// facingMode: {exact: "user"}
// facingMode: "environment"

//handle older browsers that might implement getUserMedia in some way
if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
    navigator.mediaDevices.getUserMedia = function(constraintObj) {
        let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
        return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraintObj, resolve, reject);
        });
    }
} else {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            devices.forEach(device => {
                console.log(device.kind.toUpperCase(), device.label);
                //, device.deviceId
            })
        })
        .catch(err => {
            console.log(err.name, err.message);
        })
}

// FUNCTION TO CONVERT INTO TITLECASE
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

// FUNCTION TO DISPLAY SONGS LIST

function displaySongs(songs) {
    var songContainer = document.getElementById("songsList")
    songContainer.innerHTML = ''

    for (var i = 0; i < songs.length; i++) {
        var div = document.createElement('div')
        div.className = "songs"

        var icon = document.createElement('img')
        icon.className = 'album'
        icon.src = 'music.jpg'
        div.appendChild(icon)

        var songName = document.createElement('a')

        songs[i][0] = titleCase(songs[i][0])

        songName.innerHTML = songs[i][0]
        songName.target = '_black'
        songName.href = songs[i][1]
        div.appendChild(songName)

        songContainer.appendChild(div)
    }
}

//  My FUNCTION TO SEND RECORDED VIDEO TO SERVER

const url = 'http://emophony.netlify.com/emotion'
var loader = document.getElementsByClassName('loader')

function upload(myFile) {

    //create any headers we want
    let h = new Headers();
    h.append('Accept', 'application/json'); //what we expect back
    //bundle the files and data we want to send to the server
    let fd = new FormData();

    console.log(myFile)
    fd.append('em', myFile, "em.mp4");
    console.log(fd)

    // $_FILES['avatar']['file_name']  "avatar.png"
    let req = new Request(url, {
        method: 'POST',
        headers: h,
        mode: 'cors',
        body: fd
    });

    fetch(req)
        .then((res) => {
            console.log("Succesfully Send")
            res.json().then(body => {
                try {
                    loader[0].style.display = "none"
                } catch {
                    console.log('Loaded...')
                }

                emotion = body['emotion']
                document.getElementById('emotion').innerHTML = 'Your Emotion :<br>' + emotion + ' ' + emotionEmoji[emotion.toLowerCase()]
                console.log(body)

                displaySongs(songs[emotion.toLowerCase()])
                console.log(songs)

            })
        })
        .catch((err) => {
            console.log('ERROR:', err);
        });
}



//  My FUNCTION TO SEND RECORDED VIDEO TO SERVER


navigator.mediaDevices.getUserMedia(constraintObj)
    .then(function(mediaStreamObj) {
        //connect the media stream to the first video element
        let video = document.querySelector('video');
        if ("srcObject" in video) {
            video.srcObject = mediaStreamObj;
        } else {
            //old version
            video.src = window.URL.createObjectURL(mediaStreamObj);
        }

        video.onloadedmetadata = function(ev) {
            //show in the video element what is being captured by the webcam
            video.play();
        };

        //add listeners for saving video/audio
        let start = document.getElementById('btnStart');
        let stop = document.getElementById('btnStop');
        let vidSave = document.getElementById('vid2');
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        let chunks = [];

        start.addEventListener('click', (ev) => {
            console.log('EVENT STARTED', loader)
            try {
                loader[0].style.display = "block"
            } catch {
                console.log('Loading...')
            }


            start.disabled = true
            stop.disabled = false
            mediaRecorder.start();
            console.log(mediaRecorder.state);

            // setTimeout(() => {
            //     start.disabled = false
            //     stop.disabled = true

            //     mediaRecorder.stop();
            //     console.log(mediaRecorder.state);
            // }, 5000);
        })
        stop.addEventListener('click', (ev) => {
            start.disabled = false
            stop.disabled = true

            mediaRecorder.stop();
            console.log(mediaRecorder.state);
        });
        mediaRecorder.ondataavailable = function(ev) {
            chunks.push(ev.data);
        }
        mediaRecorder.onstop = (ev) => {
            let blob = new Blob(chunks, {
                'type': 'video/mp4;'
            });
            chunks = [];
            console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" + blob)

            let videoURL = window.URL.createObjectURL(blob);
            console.log(videoURL)
                //  here I will call upload function 
            upload(blob)
            console.log(emotion)
            vidSave.src = videoURL;
        }
    })
    .catch(function(err) {
        console.log(err.name, err.message);
    });
