function Customer(nic, name, contact, address) {
    var _customerNIC = nic;
    var _customerName = name;
    var _customerContact = contact;
    var _customerAddress = address;

    function setCustomerNIC(nic) {
        _customerNIC = nic;
    }

    function setCustomerName(name) {
        _customerName = name;
    }

    function setCustomerContact(contact) {
        _customerContact = contact;
    }

    function setCustomerAddress(address) {
        _customerAddress = address;
    }

    function getCustomerNIC() {
        return _customerNIC;
    }

    function getCustomerName() {
        return _customerName;
    }

    function getCustomerContact() {
        return _customerContact;
    }

    function getCustomerAddress() {
        return _customerAddress;
    }
}