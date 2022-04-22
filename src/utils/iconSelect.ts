import folder_icon from '../icons/folder.png'
import file_icon from '../icons/file.png'
import image_icon from '../icons/image.png'

const iconCheck = (arg: string | undefined) =>{
    if (arg?.startsWith('dir')){
        return folder_icon
    }else{
        switch (arg){
      case 'jpg':
      return image_icon
      default:
        return file_icon
    }}
}

export const iconSelect = (name: string) => {
    return iconCheck(name.split('.').pop())
}