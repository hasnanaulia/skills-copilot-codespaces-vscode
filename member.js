function skipMember(member) {
    // Skip if the member is marked as private
    if (member.access && member.access === 'private') {
        return true;
    }

    // Skip if the member is deprecated
    if (member.deprecated) {
        return true;
    }

    // Skip if the member is static
    if (member.static) {
        return true;
    }

    // Do not skip the member
    return false;
}
module.exports = skipMember;
