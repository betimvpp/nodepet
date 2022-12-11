import { Request, Response } from "express";
import { createMenuObjetct } from "../helpers/createMenuObject";
import { Pet } from "../models/pets";

export const home= (req: Request, res: Response) =>{
    let list = Pet.getAll();

    res.render('pages/page',{
        menu:createMenuObjetct('all'),
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) =>{
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        menu:createMenuObjetct('dogs'),
        banner:{
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats= (req: Request, res: Response) =>{
    let list = Pet.getFromType('cat');
    res.render('pages/page',{
        menu:createMenuObjetct('cats'),
        banner:{
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) =>{
    let list = Pet.getFromType('fish');
    res.render('pages/page',{
        menu:createMenuObjetct('fishes'),
        banner:{
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}