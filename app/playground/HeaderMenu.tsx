import React, { useState } from 'react';
import { Animated, Easing } from 'react-native';
import HeaderMenu from '@/components/playground/HeaderMenu';
import { ThemedView } from '@/components/ThemedView';

import { menuItems } from '@/constants/MenuItem';

export default function HeaderMenuScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contentBlurOpacity, setContentBlurOpacity] = useState(new Animated.Value(0));
  const [contentScale, setContentScale] = useState(new Animated.Value(1));

  const handleMenuToggle = (open: boolean) => {
    setIsMenuOpen(open);

    if (open) {
      Animated.parallel([
        Animated.timing(contentBlurOpacity, {
          toValue: 1,
          duration: 350,
          easing: Easing.bezier(0.22, 1, 0.36, 1),
          useNativeDriver: true,
        }),
        Animated.timing(contentScale, {
          toValue: 0.98,
          duration: 400,
          easing: Easing.bezier(0.22, 1, 0.36, 1),
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(contentBlurOpacity, {
          toValue: 0,
          duration: 280,
          easing: Easing.bezier(0.22, 1, 0.36, 1),
          useNativeDriver: true,
        }),
        Animated.timing(contentScale, {
          toValue: 1,
          duration: 350,
          easing: Easing.bezier(0.22, 1, 0.36, 1),
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  return (
    <ThemedView className="flex-1">
      <HeaderMenu
        greeting="Hello"
        userName="John"
        menuItems={menuItems}
        onMenuToggle={handleMenuToggle}
      />
    </ThemedView>
  );
}
