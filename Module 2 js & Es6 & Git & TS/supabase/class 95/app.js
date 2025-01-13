
const supabaseUrl = "https://xfkawxjrcqzuwptcmoya.supabase.co"
const supabasKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhma2F3eGpyY3F6dXdwdGNtb3lhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjE1NTI3NiwiZXhwIjoyMDUxNzMxMjc2fQ.Mt9HomAEXyfAym9xn9vqjwcsDnuIEr7ITLe-2isKZtc"
const supabaseClient = supabase.createClient(supabaseUrl, supabasKey)


const imgInput = document.getElementById("img-inp")


async function uploadImage(){
    // console.log(imgInput.files[0])
    const file = imgInput.files[0] 

    const fileName = `${Date.now()}-${file.name}`

    const { data, error } = await supabaseClient
    .storage
    .from('images')
    .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
    })

    if(!error){
        alert('Image Upload successfully')
        fetchImages()
    }

}

const imageConatiner = document.getElementById("image-container")

async function fetchImages(){
    const { data, error } = await supabaseClient
  .storage
  .from('images')
  .list()

  console.log(data)

  for(var i=0; i<data.length;i++){
    console.log(data[i])
    const fileName = data[i].name
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src', `${supabaseUrl}/storage/v1/object/images/${fileName}`)
    img.classList.add('profile')
    div.appendChild(img)
    imageConatiner.appendChild(div)
  }

}

fetchImages()