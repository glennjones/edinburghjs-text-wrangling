import { table } from 'arquero';

async function inspectWinkDoc(doc, its) {
    let value = await doc.tokens().out( its.value )
    let stopWordFlag = await doc.tokens().out( its.stopWordFlag )
    let pos = await doc.tokens().out( its.pos )
    let lemma = await doc.tokens().out( its.lemma )
    let stem = await doc.tokens().out( its.stem )
    let shape = await doc.tokens().out( its.shape )
    let dt = table({ 
        'text': value, 
        shape,
        'stop word': stopWordFlag, 
        'part of speech': pos, 
        'stemmed': stem,
        'lemmatized': lemma, 
    });
    dt.print();
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export default {
    clone,
    inspectWinkDoc
}