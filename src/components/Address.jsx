import { useState } from 'react';
import { useAddress } from '../context/FavoritesContext';
import AddressCss from "./Address.module.css";

export const Address = () => {
    const { address, setAddress } = useAddress();
    const [addresses, setAddresses] = useState(address?.list || []);
    const [selectedId, setSelectedId] = useState(address?.selected || null);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',
        mobileNumber: '',
        addressType: 'Home'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveAddress = (e) => {
        e.preventDefault();
        if (editingId) {
            const updated = addresses.map(addr =>
                addr.id === editingId ? { ...formData, id: editingId } : addr
            );
            setAddresses(updated);
            setEditingId(null);
        } else {
            const newAddress = {
                ...formData,
                id: Date.now()
            };
            setAddresses([...addresses, newAddress]);
        }
        setAddress({ list: addresses, selected: selectedId });
        setFormData({
            firstName: '',
            lastName: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            pincode: '',
            mobileNumber: '',
            addressType: 'Home'
        });
        setShowForm(false);
    };

    const handleSelectAddress = (id) => {
        setSelectedId(id);
        setAddress({ list: addresses, selected: id });
    };

    const handleEditAddress = (addr) => {
        setFormData(addr);
        setEditingId(addr.id);
        setShowForm(true);
    };

    const handleDeleteAddress = (id) => {
        const updated = addresses.filter(addr => addr.id !== id);
        setAddresses(updated);
        if (selectedId === id) {
            setSelectedId(updated[0]?.id || null);
        }
        setAddress({ list: updated, selected: selectedId });
    };

    return (
        <div className={AddressCss['address-container']}>
            <h2 className={AddressCss['header']}>
                Delivery Address
                <button
                    className={AddressCss['add-btn']}
                    onClick={() => {
                        setShowForm(true);
                        setEditingId(null);
                        setFormData({
                            firstName: '',
                            lastName: '',
                            addressLine1: '',
                            addressLine2: '',
                            city: '',
                            state: '',
                            pincode: '',
                            mobileNumber: '',
                            addressType: 'Home'
                        });
                    }}
                >
                    + Add New
                </button>
            </h2>

            {/* Display saved addresses */}
            {addresses.length > 0 && (
                <div className={AddressCss['addresses-list']}>
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            className={`${AddressCss['address-card']} ${selectedId === addr.id ? AddressCss['selected'] : ''}`}
                            onClick={() => handleSelectAddress(addr.id)}
                        >
                            <div className={AddressCss['radio']}>
                                <input
                                    type="radio"
                                    checked={selectedId === addr.id}
                                    onChange={() => handleSelectAddress(addr.id)}
                                />
                            </div>
                            <div className={AddressCss['address-info']}>
                                <p className={AddressCss['name']}>
                                    {addr.firstName} {addr.lastName}
                                </p>
                                <p className={AddressCss['type']}>{addr.addressType}</p>
                                <p className={AddressCss['details']}>
                                    {addr.addressLine1}, {addr.city} - {addr.pincode}
                                </p>
                                <p className={AddressCss['phone']}>{addr.mobileNumber}</p>
                            </div>
                            <div className={AddressCss['actions']}>
                                <button
                                    className={AddressCss['edit-btn']}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEditAddress(addr);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className={AddressCss['delete-btn']}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteAddress(addr.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit address form */}
            {showForm && (
                <div className={AddressCss['form-container']}>
                    <h3>{editingId ? 'Edit Address' : 'Add New Address'}</h3>
                    <form onSubmit={handleSaveAddress}>
                        <div className={AddressCss['row']}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="addressLine1"
                            placeholder="House / Flat No, Building Name, Street"
                            value={formData.addressLine1}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            type="text"
                            name="addressLine2"
                            placeholder="Area, Landmark (Optional)"
                            value={formData.addressLine2}
                            onChange={handleInputChange}
                        />

                        <div className={AddressCss['row']}>
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={AddressCss['row']}>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Pincode"
                                value={formData.pincode}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="tel"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={AddressCss['address-type']}>
                            <label>Address Type</label>
                            <div className={AddressCss['type-options']}>
                                {['Home', 'Work', 'Other'].map(type => (
                                    <label key={type} className={AddressCss['type-option']}>
                                        <input
                                            type="radio"
                                            name="addressType"
                                            value={type}
                                            checked={formData.addressType === type}
                                            onChange={handleInputChange}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className={AddressCss['button-group']}>
                            <button type="submit" className={AddressCss['save-btn']}>
                                {editingId ? 'Update Address' : 'Save & Continue'}
                            </button>
                            <button
                                type="button"
                                className={AddressCss['cancel-btn']}
                                onClick={() => setShowForm(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
