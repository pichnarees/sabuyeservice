/**
 * PEA Solar Request System - Design Tokens (TypeScript)
 * Version: 1.0.0
 * 
 * This file contains all design tokens as TypeScript constants
 * for use in React/TypeScript projects.
 */

// ========================================
// BRAND COLORS
// ========================================

export const brandColors = {
  primary: {
    default: '#8E0369',
    hover: '#7A0359',
    light: '#A80589',
  },
} as const;

// ========================================
// STATUS COLORS
// ========================================

export const statusColors = {
  success: {
    background: '#ECFEF3',
    text: '#079455',
    border: '#C3F4D6',
  },
  cancelled: {
    background: '#F4F4F4',
    text: '#5E5E5E',
    border: '#EAECF0',
  },
  error: {
    background: '#FEF2F2',
    text: '#DC2626',
    border: '#FECACA',
  },
  inProgress: {
    background: '#EFF8FF',
    text: '#175CD3',
    border: '#B2DDFF',
  },
  waiting: {
    background: '#FFFAEB',
    text: '#DC6803',
    border: '#FEDF89',
  },
} as const;

// ========================================
// NEUTRAL COLORS
// ========================================

export const neutralColors = {
  background: {
    page: '#FAFBFC',
    card: '#FFFFFF',
    section: '#F2F4F7',
    hover: '#F9FAFB',
  },
  text: {
    primary: '#424957',
    secondary: '#6A7282',
    tertiary: '#99A1AF',
    heading: '#1E1E1E',
  },
  border: {
    default: '#E0E4EC',
    light: '#E9EAEC',
    medium: '#DEE2E6',
    dark: '#D0D0D0',
  },
} as const;

// ========================================
// SEMANTIC COLORS
// ========================================

export const semanticColors = {
  destructive: '#DC2626',
  warning: '#DC6803',
  info: '#175CD3',
} as const;

// ========================================
// TYPOGRAPHY
// ========================================

export const typography = {
  fontFamily: {
    primary: "'IBM Plex Sans Thai', sans-serif",
  },
  fontSize: {
    h1: '30px',
    h2: '24px',
    h3: '20px',
    body: '16px',
    small: '14px',
    label: '12px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    normal: 'normal',
    relaxed: '1.5',
  },
} as const;

// ========================================
// SPACING
// ========================================

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '32px',
  '5xl': '40px',
  '6xl': '60px',
} as const;

export const componentSpacing = {
  button: {
    horizontal: '16px',
    vertical: '12px',
  },
  card: '20px',
  section: '28px',
  input: '12px',
} as const;

// ========================================
// BORDER RADIUS
// ========================================

export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  full: '9999px',
} as const;

export const componentBorderRadius = {
  button: '8px',
  card: '20px',
  section: '16px',
  badge: '40px',
} as const;

// ========================================
// COMPONENT DIMENSIONS
// ========================================

export const dimensions = {
  badge: {
    width: '54px',
    height: '22px',
  },
  header: {
    height: '74px',
  },
  progressStepper: {
    height: '73px',
    circleSize: '34px',
  },
  container: {
    maxWidth: '1440px',
    padding: '28px',
    marginHorizontal: '40px',
  },
} as const;

// ========================================
// SHADOWS
// ========================================

export const shadows = {
  card: '0px 4px 12px rgba(0, 0, 0, 0.08)',
  modal: '0px 8px 24px rgba(0, 0, 0, 0.12)',
  button: '0px 1px 2px rgba(0, 0, 0, 0.05)',
} as const;

// ========================================
// Z-INDEX
// ========================================

export const zIndex = {
  header: 10,
  sticky: 20,
  dropdown: 30,
  modalBackdrop: 40,
  modal: 50,
  toast: 60,
} as const;

// ========================================
// COMPONENT STYLES
// ========================================

export const buttonStyles = {
  primary: {
    background: brandColors.primary.default,
    backgroundHover: brandColors.primary.hover,
    text: '#FFFFFF',
    border: 'none',
    borderRadius: componentBorderRadius.button,
    paddingHorizontal: '32px',
    paddingVertical: '12px',
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.bold,
  },
  secondary: {
    background: '#FFFFFF',
    backgroundHover: 'rgba(142, 3, 105, 0.05)',
    text: brandColors.primary.default,
    border: `1px solid ${brandColors.primary.default}`,
    borderRadius: componentBorderRadius.button,
    paddingHorizontal: '32px',
    paddingVertical: '12px',
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.bold,
  },
  tertiary: {
    background: '#FFFFFF',
    backgroundHover: neutralColors.background.hover,
    text: neutralColors.text.primary,
    border: `1px solid ${neutralColors.border.medium}`,
    borderRadius: componentBorderRadius.button,
    paddingHorizontal: '16px',
    paddingVertical: '8px',
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.semibold,
  },
  action: {
    background: brandColors.primary.light,
    backgroundHover: brandColors.primary.hover,
    text: '#FFFFFF',
    border: 'none',
    borderRadius: componentBorderRadius.button,
    paddingHorizontal: '16px',
    paddingVertical: '8px',
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.bold,
  },
} as const;

export const badgeStyles = {
  success: {
    background: statusColors.success.background,
    text: statusColors.success.text,
    border: `1px solid ${statusColors.success.border}`,
  },
  cancelled: {
    background: statusColors.cancelled.background,
    text: statusColors.cancelled.text,
    border: `1px solid ${statusColors.cancelled.border}`,
  },
  error: {
    background: statusColors.error.background,
    text: statusColors.error.text,
    border: `1px solid ${statusColors.error.border}`,
  },
  inProgress: {
    background: statusColors.inProgress.background,
    text: statusColors.inProgress.text,
    border: `1px solid ${statusColors.inProgress.border}`,
  },
  waiting: {
    background: statusColors.waiting.background,
    text: statusColors.waiting.text,
    border: `1px solid ${statusColors.waiting.border}`,
  },
} as const;

// ========================================
// STATUS BADGE COMPONENTS MAPPING
// ========================================

export const statusBadgeComponents = {
  success: 'Status-100-48',
  inProgress: 'Status-100-55',
  waiting: 'Status-100-62',
  error: 'Status-100-69',
  cancelled: 'Status-104-374',
} as const;

export type StatusType = keyof typeof statusBadgeComponents;

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Get status badge component name by status type
 * @param status - The status type
 * @returns The Figma component name
 */
export function getStatusBadgeComponent(status: StatusType): string {
  return statusBadgeComponents[status];
}

/**
 * Get status colors by status type
 * @param status - The status type
 * @returns Object containing background, text, and border colors
 */
export function getStatusColors(status: StatusType) {
  return statusColors[status === 'error' ? 'error' : status];
}

/**
 * Generate Tailwind class string for button variant
 * @param variant - Button variant
 * @returns Tailwind class string
 */
export function getButtonClasses(variant: keyof typeof buttonStyles): string {
  const style = buttonStyles[variant];
  const classes: string[] = [];
  
  classes.push('inline-flex items-center justify-center');
  classes.push('font-semibold');
  classes.push('transition-colors');
  classes.push('cursor-pointer');
  
  return classes.join(' ');
}

// ========================================
// TYPE EXPORTS
// ========================================

export type BrandColors = typeof brandColors;
export type StatusColors = typeof statusColors;
export type NeutralColors = typeof neutralColors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type ButtonStyles = typeof buttonStyles;
export type BadgeStyles = typeof badgeStyles;

// ========================================
// DEFAULT EXPORT
// ========================================

export const designTokens = {
  brandColors,
  statusColors,
  neutralColors,
  semanticColors,
  typography,
  spacing,
  componentSpacing,
  borderRadius,
  componentBorderRadius,
  dimensions,
  shadows,
  zIndex,
  buttonStyles,
  badgeStyles,
  statusBadgeComponents,
} as const;

export default designTokens;

// ========================================
// USAGE EXAMPLES
// ========================================

/*
Example 1: Using in React Component
------------------------------------
import { brandColors, buttonStyles } from './design-tokens';

const MyButton = () => (
  <button
    style={{
      backgroundColor: brandColors.primary.default,
      padding: `${buttonStyles.primary.paddingVertical} ${buttonStyles.primary.paddingHorizontal}`,
      borderRadius: buttonStyles.primary.borderRadius,
    }}
  >
    Click Me
  </button>
);

Example 2: Using with Tailwind CSS
-----------------------------------
import { statusColors } from './design-tokens';

const MyBadge = ({ status }) => (
  <span
    className="px-2.5 py-1 rounded-full text-xs font-medium"
    style={{
      backgroundColor: statusColors[status].background,
      color: statusColors[status].text,
      border: `1px solid ${statusColors[status].border}`,
    }}
  >
    {status}
  </span>
);

Example 3: Using Helper Functions
----------------------------------
import { getStatusBadgeComponent, getStatusColors } from './design-tokens';

const StatusDisplay = ({ status }: { status: StatusType }) => {
  const componentName = getStatusBadgeComponent(status);
  const colors = getStatusColors(status);
  
  return (
    <div style={{ color: colors.text }}>
      Component: {componentName}
    </div>
  );
};

Example 4: Using with styled-components
----------------------------------------
import styled from 'styled-components';
import { brandColors, spacing, borderRadius } from './design-tokens';

const StyledButton = styled.button`
  background-color: ${brandColors.primary.default};
  padding: ${spacing.md} ${spacing.xl};
  border-radius: ${borderRadius.sm};
  
  &:hover {
    background-color: ${brandColors.primary.hover};
  }
`;
*/
