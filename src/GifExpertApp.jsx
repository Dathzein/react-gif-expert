import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Onepunch' ]);

    // console.log(categories);

    const onAddCategory = (newCategory) => {
        //    categories.push('one piece');
        // console.log(newCategory);

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories,]);
        // setCategories( cat => [ ...cat, 'One Piece'] );

    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewValue={(e) => onAddCategory(e)}
            />
            <ol>
                {categories.map((category) => (<GifGrid key={category} category={category} />))}
            </ol>

        </>
    )
}
