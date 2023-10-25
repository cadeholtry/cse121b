
export function typeBuilder(type) {
    return (mon => mon.type[0].includes(type) || (mon.type.length == 2 && mon.type[1].includes(type)));
}
export function genBuilder(id1, id2) {
    return (mon => mon.id > id1 && mon.id < id2)
}