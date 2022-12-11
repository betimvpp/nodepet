type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';
export const createMenuObjetct = (activeMenu: MenuOptions) =>{
    let returnObjetct = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    }
    if(activeMenu !==''){
        returnObjetct[activeMenu] = true;
    }
    return returnObjetct;   
}