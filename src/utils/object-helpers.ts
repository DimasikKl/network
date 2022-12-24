// для иньютабельного изменения объекта
export const updateObjectinArray = (items: any, itemsId: any, objPropName: any, newObjProps: any) => {
    return items.map((u: any) => {
        if (u[objPropName] === itemsId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}