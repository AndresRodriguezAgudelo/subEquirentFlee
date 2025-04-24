'use client'
import React, { useState, useEffect } from 'react';
import { LayoutProfile } from '../Layout/index';
import { ProfileClient } from '../../components/ProfileClient';
import { ProfileAdmin } from '../../components/ProfileAdmin';

export const ProfileClientTemplate = () => {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        setRole(localStorage.getItem('role'));
    }, []);

    return (
        <LayoutProfile>
          {role === 'client' ? <ProfileClient /> : <ProfileAdmin />}
        </LayoutProfile>
    )
};
