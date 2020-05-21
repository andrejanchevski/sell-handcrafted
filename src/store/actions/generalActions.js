export {
    addVariations,
    selectedVariant
} from './productOptions'

export {
    addShopName,
    addShopCategory,
    addShopDesc,
    addShopUTN,
    addShopBA,
    addShopProfilePicture,
    addShopCoverPhoto,
    createShop
} from './createShopActions'

export {
    openRegisterModal,
    closeRegisterModal,
    addUserFirstName,
    addUserLastName,
    addUserEmail,
    addUserPassword,
    confrimPassword,
    createUser

} from './registerModalActions'

export {
    addProductName,
    addPrimaryPhoto,
    addLeftAngle,
    addRightAngle,
    addDetailsPhoto,
    addInUsePhoto,
    addScenePhoto,
    addProductDescription,
    addProductCategory,
    addProductMaterial,
    addProductSKU,
    selectFirstAttribute,
    selectSecondAttribute,
    selectThirdAttribute,
    addProductVariaton,
    deleteProductVariaton,
    sentProduct,
    getStartingAttributes,
    setForWhichShopId
} from './createProductActions'

export {
    addPrice,
    addQuantity,
    addOnInputOne,
    addOnInputTwo,
    addOnInputThree,
    addOnSelectOne,
    addOnSelectTwo,
    addOnSelectThree,
    clear

} from "./tableAttributeActions"

export {
    setCategoriesAsTree,
    initCategories

} from "./categoryActions"


export {
    getProductById,
    setProductPrice,
    setProductPriceForShow
} from './productActions'

export{
    getShopById,
    getShopProductsByPage
} from './shopActions'

export {
    getAllShops,
    getShopsFromFilters
} from './allShopsActions'
