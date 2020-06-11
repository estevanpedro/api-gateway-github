export default function parse_link_header(header: string) {
    if (header.length === 0) {
        throw new Error("input must not be of zero length");
    }
    var parts = header.split(',');
    var links = {};
    for (var i = 0; i < parts.length; i++) {
        var section = parts[i].split(';');
        if (section.length !== 2) {
            throw new Error("section could not be split on ';'");
        }
        var url = section[0].replace(/<(.*)>/, '$1').trim();
        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
        // @ts-ignore
        links[name] = url;
    }
    return links;
} 