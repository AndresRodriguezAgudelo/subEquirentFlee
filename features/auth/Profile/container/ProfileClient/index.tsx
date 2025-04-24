'use client'
import React from 'react';
import { LayoutProfile } from '../Layout/index';
import { ProfileClient } from '../../components/ProfileClient';
import { ProfileAdmin } from '../../components/ProfileAdmin';

export const ProfileClientTemplate = () => {
    const role = localStorage.getItem('role');        
    return (
        <LayoutProfile>
          {
            role === 'client' ? <ProfileClient /> : <ProfileAdmin />
          }
        </LayoutProfile>
    )
};
